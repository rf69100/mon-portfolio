import PropTypes from 'prop-types';
import { contact } from '../../data/contact';
import { personalInfo } from '../../data/personal';

const ContactCard = ({ title, children, gradient, titleColor }) => (
  <div
    className={`bg-gradient-to-br ${gradient} border-2 rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`${titleColor} font-mono font-bold uppercase`}>{title}</div>
    </div>
    {children}
  </div>
);

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  gradient: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
};

export const Contact = () => {
  const [email, phone, location] = contact.cards;

  return (
    <section
      id="contact"
      className="py-20 bg-transparent opacity-0 animate-slide-in-bottom animation-delay-500"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 font-mono tracking-tight">
            {contact.title}
          </h2>
          <p className="text-xl text-gray-400 font-mono uppercase tracking-widest">
            {contact.subtitle}
          </p>
          <div className="mt-6 inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full font-mono font-bold text-sm">
            {contact.mission.dates}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/50 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl shadow-blue-500/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-purple-300 font-mono font-bold text-lg uppercase mb-2">
                  MISSION RECHERCHÉE
                </h3>
                <div className="text-white font-mono text-xl font-bold mb-2">
                  {contact.mission.title}
                </div>
                <div className="text-gray-300 font-mono text-sm">{contact.mission.dates}</div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-green-300 font-mono font-bold uppercase">DISPONIBILITÉ</div>
                </div>
                <div className="text-white font-mono text-lg font-bold mb-2">
                  {contact.availability.status}
                </div>
                <div className="text-gray-400 font-mono text-sm mb-3">
                  {contact.availability.detail}
                </div>
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-full w-full animate-pulse" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ContactCard
                title="EMAIL"
                gradient="from-blue-600/20 to-cyan-600/20 border-blue-500/50"
                titleColor="text-blue-300"
              >
                <a
                  href={email.href}
                  className="text-white font-mono text-lg font-bold hover:text-blue-300 transition-colors block break-all"
                >
                  {email.value}
                </a>
              </ContactCard>

              <ContactCard
                title="TÉLÉPHONE"
                gradient="from-purple-600/20 to-pink-600/20 border-purple-500/50"
                titleColor="text-purple-300"
              >
                <a
                  href={phone.href}
                  className="text-white font-mono text-lg font-bold hover:text-purple-300 transition-colors block"
                >
                  {phone.value}
                </a>
              </ContactCard>

              <ContactCard
                title="LOCALISATION"
                gradient="from-green-600/20 to-blue-600/20 border-green-500/50"
                titleColor="text-green-300"
              >
                <div className="text-white font-mono text-lg font-bold">{location.value}</div>
              </ContactCard>
            </div>

            <div className="space-y-6">
              <ContactCard
                title="SPÉCIALITÉS"
                gradient="from-yellow-600/20 to-orange-600/20 border-yellow-500/50"
                titleColor="text-yellow-300"
              >
                <div className="flex flex-wrap gap-2">
                  {contact.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 px-3 py-2 rounded-lg text-sm font-mono font-bold hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ContactCard>

              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-600/50 rounded-2xl p-6 text-center">
                <div className="text-white font-mono font-bold mb-2">{contact.nextStep.title}</div>
                <div className="text-gray-300 font-mono text-sm">{contact.nextStep.subtitle}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="relative bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-5 rounded-2xl transition-all font-mono font-bold uppercase tracking-wider text-xl text-center shadow-2xl hover:scale-105 block border-2 border-white/20"
            >
              <span className="flex items-center justify-center gap-3">{contact.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
