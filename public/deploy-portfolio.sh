#!/usr/bin/env bash

set -euo pipefail

THIS_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
cd "$THIS_DIR"

# Load environment if present
if [ -f ".deploy.env" ]; then
  # export variables from .deploy.env (ignores comments and empty lines)
  set -a
  . <(grep -v '^\s*#' .deploy.env | sed '/^\s*$/d') 2>/dev/null || true
  set +a
fi

FTP_USER="${FTP_USER-}"
FTP_PASS="${FTP_PASS-}"
FTP_HOST="${FTP_HOST-ftp.cluster021.hosting.ovh.net}"
REMOTE_FOLDER="${REMOTE_FOLDER-mon-portfolio}"
BUILD_FOLDER="build"

# If RELATIVE_ASSETS is set to 1 (or true), set PUBLIC_URL to use relative paths.
# This makes CRA emit assets with relative paths which is useful for hosting in a subfolder.
RELATIVE_ASSETS="${RELATIVE_ASSETS-0}"

if [[ -z "$FTP_USER" || -z "$FTP_PASS" ]]; then
  echo "🔒 FTP credentials missing. Create .deploy.env or set FTP_USER and FTP_PASS."
  echo "Example .deploy.env contents:"
  echo "  FTP_USER=ftpuser"
  echo "  FTP_PASS=ftppass"
  echo "  FTP_HOST=ftp.cluster021.hosting.ovh.net"
  echo "  REMOTE_FOLDER=mon-portfolio"
  exit 1
fi

echo "📦 Building project (Create React App)..."
if [[ "$RELATIVE_ASSETS" == "1" || "$RELATIVE_ASSETS" == "true" ]]; then
  echo "🔁 Building with relative asset paths (PUBLIC_URL=./)"
  export PUBLIC_URL="./"
fi

npm ci --silent || npm install --silent
npm run build --silent

if [ ! -d "$BUILD_FOLDER" ]; then
  echo "❌ Build folder $BUILD_FOLDER not found"
  exit 1
fi

echo "🔎 Quick verification of build files..."
if grep -q "./static/" $BUILD_FOLDER/index.html 2>/dev/null; then
  echo "🔎 index.html references ./static/ (relative)"
elif grep -q "/static/" $BUILD_FOLDER/index.html 2>/dev/null; then
  echo "🔎 index.html references /static/ (absolute)"
else
  echo "⚠️ index.html does not reference /static/ - inspect $BUILD_FOLDER/index.html"
fi

jsfile=$(ls $BUILD_FOLDER/static/js/*.js 2>/dev/null | head -n1 || true)
if [ -z "$jsfile" ]; then
  echo "❌ No JS asset found in $BUILD_FOLDER/static/js"
  exit 1
fi

echo "📤 Uploading $BUILD_FOLDER to FTP /www/$REMOTE_FOLDER/ ..."
lftp -c "open -u '$FTP_USER','$FTP_PASS' $FTP_HOST; mkdir -p /www/$REMOTE_FOLDER; cd /www/$REMOTE_FOLDER; mirror -R --delete --continue --verbose ./$BUILD_FOLDER/ .;"

echo "🧪 Testing public URL..."
URL="https://${FTP_HOST#ftp.}/$REMOTE_FOLDER/"
# Allow user override for URL if deploying to a custom domain
URL="${PUBLIC_URL_OVERRIDE-$URL}"
if curl --silent --head --fail "$URL" >/dev/null; then
  echo "✅ Public URL reachable: $URL"
else
  echo "❌ Public URL not reachable: $URL"
fi

echo "🔎 Asset check (public)..."
curl -I -sS "$URL" | sed -n '1,20p' || true
curl -I -sS "${URL}static/js/$(basename $jsfile)" | sed -n '1,20p' || true

echo "✅ Deploy completed"
