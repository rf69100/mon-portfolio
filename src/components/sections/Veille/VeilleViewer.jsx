import PropTypes from 'prop-types';

export const VeilleViewer = ({ veille }) => (
  <div className="container mx-auto px-6 max-w-5xl mt-12 animate-slide-in-right">
    <div className="bg-gray-900/50 border-2 border-green-500/30 rounded-xl p-6 md:p-8 backdrop-blur-sm">
      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-mono mb-2 text-center">
        {veille.title}
      </h3>
      <p className="text-gray-300 font-mono text-center mb-6">
        {veille.date} • {veille.source}
      </p>
      <div
        className="relative w-full rounded-lg overflow-hidden border border-green-500/30 shadow-lg shadow-green-500/20"
        style={{ paddingTop: '75%' }}
      >
        <iframe
          src={`${veille.pdfUrl}#view=FitH`}
          title={`Présentation de veille - ${veille.title}`}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <a
          href={veille.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-mono font-bold hover:scale-105 transition-transform shadow-lg shadow-green-500/30"
        >
          Ouvrir en plein écran
        </a>
        {veille.pptxUrl && (
          <a
            href={veille.pptxUrl}
            download
            className="bg-gray-800 border-2 border-green-500/50 text-green-400 px-6 py-3 rounded-lg font-mono font-bold hover:bg-gray-700 hover:scale-105 transition-all"
          >
            Télécharger le .pptx
          </a>
        )}
      </div>
    </div>
  </div>
);

VeilleViewer.propTypes = {
  veille: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
    pptxUrl: PropTypes.string,
  }).isRequired,
};
