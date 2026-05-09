import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
// import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { Instagram, Github, Facebook, Code, Server, Smartphone, Wrench } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* <SplashCursor  /> */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#444A29'
          hoverFillColor='#C6F10E'
        />
      </div>
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-1 lg:col-span-6">
            <div className="flex items-center min-h-screen lg:h-full">
              <div className="flex flex-col gap-4 sm:gap-6 w-full px-4 sm:px-0">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div 
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <h1 className="text-lg sm:text-2xl text-white font-bold">I'm Ready For Job</h1>
                    <RotatingText 
                        texts={['Web Design', 'Web Depelopment', 'Web Programing', 'Ai Development']}
                        mainClassName="px-2 sm:px-3 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-base sm:text-xl md:text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start w-full">
                  <SplitText 
                    text="I'm Faiza Rizalul Fikri"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-start text-white"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText 
                    text="Full Stack Developer"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText 
                  text="I am from Indonesia, I have more than 2 years of work experience, I am currently working in a company as a full stack product designer, analyzing the system to be created, Managing and leading the team to designing the user interface besides that I am also a freelance frontend developer. come work with me."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-200"
                />
                <div className="flex items-center w-full">
                  <GradientText
                    colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-lg border text-sm sm:text-base md:text-lg"
                  >
                    Consultation Now
                  </GradientText>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 relative hidden lg:block">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="CREATIVE*ACADEMY*ID*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-60 right-28"
            />
          </div>
        </div>
      </div>
      <div >
        <ScrollVelocity 
        texts={['Creative Academy', 'Ngajarin Kalian Dari Cupu Sampe Suhu']} 
        />
      </div>

      {/* Projects Section */}
      <section className="relative min-h-screen py-16 sm:py-20 lg:py-32 bg-[#19222D] overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal'
            borderColor='#444A29'
            hoverFillColor='#C6F10E'
          />
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[#C6F10E]">Featured</span> Projects
            </h2>
          </AnimatedContent>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: 'Project 1', description: 'Describe your project here', tech: ['React', 'Next.js'], github: 'https://github.com/your-username/project-1', image: '/assets/project1.png' },
              { title: 'Project 2', description: 'Describe your project here', tech: ['React', 'Next.js'], github: 'https://github.com/your-username/project-2', image: '/assets/project2.png' },
              { title: 'Project 3', description: 'Describe your project here', tech: ['React', 'Next.js'], github: 'https://github.com/your-username/project-3', image: '/assets/project3.png' },
            ].map((project) => (
              <AnimatedContent
                key={project.title}
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                threshold={0.2}
              >
                <div className="bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] p-1 rounded-lg hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                  <div className="bg-[#19222D] rounded-lg h-full flex flex-col">
                    <div className="relative w-full h-40 bg-gray-800 flex items-center justify-center overflow-hidden group">
                      <div className="w-full h-full bg-gradient-to-br from-[#444A29] to-[#2a2f1f] flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Project Image</span>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 flex-grow text-sm sm:text-base">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 sm:px-3 py-1 bg-[#C6F10E] text-black rounded-full text-xs sm:text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] text-black rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative min-h-screen py-16 sm:py-20 lg:py-32 bg-[#19222D] overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal'
            borderColor='#444A29'
            hoverFillColor='#C6F10E'
          />
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[#C6F10E]">Technical</span> Skills
            </h2>
          </AnimatedContent>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                category: 'Frontend Development', 
                icon: Code,
                skills: [
                  { name: 'HTML5', type: 'Language' },
                  { name: 'CSS3', type: 'Language' },
                  { name: 'JavaScript (ES6+)', type: 'Language' },
                  { name: 'Bootstrap', type: 'Framework' },
                  { name: 'Tailwind CSS', type: 'Framework' },
                  { name: 'Sass', type: 'Framework' },
                  { name: 'React.js', type: 'Framework' },
                  { name: 'Next.js', type: 'Framework' },
                ]
              },
              { 
                category: 'Backend Development', 
                icon: Server,
                skills: [
                  { name: 'PHP', type: 'Language' },
                  { name: 'Laravel', type: 'Framework' },
                  { name: 'CodeIgniter', type: 'Framework' },
                  { name: 'Node.js', type: 'Language' },
                  { name: 'Express', type: 'Framework' },
                  { name: 'MySQL/MariaDB', type: 'Database' },
                  { name: 'PostgreSQL', type: 'Database' },
                ]
              },
              { 
                category: 'Mobile Development', 
                icon: Smartphone,
                skills: [
                  { name: 'Java', type: 'Language' },
                  { name: 'Kotlin', type: 'Language' },
                  { name: 'Android Studio', type: 'Tool' },
                  { name: 'Native Development', type: 'Specialty' },
                ]
              },
              { 
                category: 'Tools & Others', 
                icon: Wrench,
                skills: [
                  { name: 'Git', type: 'Version Control' },
                  { name: 'GitHub', type: 'Version Control' },
                  { name: 'GitLab', type: 'Version Control' },
                  { name: 'Bitbucket', type: 'Version Control' },
                  { name: 'Microsoft Office', type: 'Productivity' },
                ]
              },
            ].map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <AnimatedContent
                  key={index}
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  threshold={0.2}
                >
                  <div className="bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] p-1 rounded-lg hover:shadow-lg transition-all duration-300 h-full">
                    <div className="bg-[#19222D] p-4 sm:p-6 rounded-lg h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] rounded-lg flex items-center justify-center">
                          <IconComponent size={24} className="text-black" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#C6F10E]">{skillGroup.category}</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {skillGroup.skills.map((skill) => (
                          <div key={skill.name} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#40ffaa] rounded-full mt-1.5 flex-shrink-0"></div>
                            <div className="min-w-0">
                              <span className="text-gray-200 text-sm sm:text-base font-medium block">{skill.name}</span>
                              <span className="text-gray-500 text-xs">{skill.type}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative min-h-screen py-16 sm:py-20 lg:py-32 bg-[#19222D] overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal'
            borderColor='#444A29'
            hoverFillColor='#C6F10E'
          />
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
              Work <span className="text-[#C6F10E]">Experience</span>
            </h2>
          </AnimatedContent>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {[
              {
                position: 'Warehouse Operations - Cycle Count & Production',
                company: 'WareHouse Lucky Bundle',
                period: '2024 - 2024',
                duration: '7 Months',
                responsibilities: [
                  'Managed inventory cycle counting and stock verification processes',
                  'Coordinated production workflows and warehouse logistics',
                  'Ensured accuracy in product tracking and documentation',
                  'Collaborated with team members for efficient warehouse operations'
                ]
              },
            ].map((exp, index) => (
              <AnimatedContent
                key={index}
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                threshold={0.2}
              >
                <div className="border-l-4 border-[#C6F10E] pl-4 sm:pl-6 lg:pl-8 py-3 sm:py-4 hover:bg-opacity-10 hover:bg-[#C6F10E] transition-all duration-300 rounded-r-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{exp.position}</h3>
                    <span className="text-[#C6F10E] font-medium text-sm sm:text-base whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-[#40ffaa] font-semibold mb-1 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3">{exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-300 text-sm sm:text-base">
                        <span className="text-[#40ffaa] font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative min-h-screen py-16 sm:py-20 lg:py-32 bg-[#19222D] overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal'
            borderColor='#444A29'
            hoverFillColor='#C6F10E'
          />
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            threshold={0.2}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
              <span className="text-[#C6F10E]">Education</span> & Certifications
            </h2>
          </AnimatedContent>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {[
              {
                title: "Bachelor's Degree",
                institution: 'Universitas Pamulang',
                year: '2026',
                details: 'Degree in Information Technology',
                image: '/assets/universitas-pamulang.png'
              },
              {
                title: 'TOEFL Certificate',
                institution: 'TOEFL Test',
                score: '425',
                year: '2024',
                details: 'Test of English as a Foreign Language',
                image: '/assets/toefl-certificate.png'
              },
              {
                title: 'N5 Nattest Certificate',
                institution: 'Nattest Japanese Language',
                score: '000',
                year: '2024',
                details: 'Japanese Language Proficiency N5 Level',
                image: '/assets/nattest-certificate.png'
              },
            ].map((edu, index) => (
              <AnimatedContent
                key={index}
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                threshold={0.2}
              >
                <div className="bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] p-1 rounded-lg overflow-hidden">
                  <div className="bg-[#19222D] rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                      {/* Image Section */}
                      <div className="relative w-full h-48 sm:h-full bg-gray-800 flex items-center justify-center overflow-hidden group sm:col-span-1">
                        <div className="w-full h-full bg-gradient-to-br from-[#444A29] to-[#2a2f1f] flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Certificate Image</span>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-4 sm:p-6 sm:col-span-2 flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{edu.title}</h3>
                        <p className="text-[#C6F10E] font-semibold mb-2 text-sm sm:text-base">{edu.institution}</p>
                        <p className="text-gray-300 mb-2 text-sm sm:text-base">{edu.details}</p>
                        <div className="flex gap-4">
                          {edu.score && (
                            <div>
                              <p className="text-gray-400 text-xs sm:text-sm">Score</p>
                              <p className="text-[#40ffaa] font-bold text-base sm:text-lg">{edu.score}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-gray-400 text-xs sm:text-sm">Year</p>
                            <p className="text-[#40ffaa] font-bold text-base sm:text-lg">{edu.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-[#19222D] overflow-hidden flex items-center min-h-screen">
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal'
            borderColor='#444A29'
            hoverFillColor='#C6F10E'
          />
        </div>
        <div className="container mx-auto relative z-10 px-4 w-full">
          <div className="max-w-2xl mx-auto">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              threshold={0.2}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-8 text-center">
                Let's <span className="text-[#C6F10E]">Connect</span>
              </h2>
              <p className="text-gray-300 text-center mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </AnimatedContent>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {[
                { label: 'Email', value: 'your@email.com' },
                { label: 'Phone', value: '+62 XXX XXX XXXX' },
                { label: 'Location', value: 'Indonesia' },
              ].map((contact) => (
                <AnimatedContent
                  key={contact.label}
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  threshold={0.2}
                >
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#C6F10E] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm sm:text-base">{contact.label[0]}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 text-xs sm:text-sm">{contact.label}</p>
                      <p className="text-white text-sm sm:text-base md:text-lg font-semibold break-words">{contact.value}</p>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>

            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              threshold={0.2}
            >
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <GradientText
                  colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-lg border inline-block cursor-pointer hover:scale-105 transition-transform text-sm sm:text-base md:text-lg whitespace-nowrap"
                >
                  Get In Touch
                </GradientText>

                <div className="flex gap-4 sm:gap-6">
                  <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    threshold={0.2}
                  >
                    <a 
                      href="https://instagram.com/zhaaa_1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] p-1 rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-[#19222D] rounded-md flex items-center justify-center">
                        <Instagram size={24} className="text-[#C6F10E]" />
                      </div>
                    </a>
                  </AnimatedContent>

                  <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    threshold={0.2}
                  >
                    <a 
                      href="https://github.com/Zhaaa01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] p-1 rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-[#19222D] rounded-md flex items-center justify-center">
                        <Github size={24} className="text-[#C6F10E]" />
                      </div>
                    </a>
                  </AnimatedContent>

                  <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    threshold={0.2}
                  >
                    <a 
                      href="https://facebook.com/faiza.rizalul.fikri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] p-1 rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-[#19222D] rounded-md flex items-center justify-center">
                        <Facebook size={24} className="text-[#C6F10E]" />
                      </div>
                    </a>
                  </AnimatedContent>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
    </div>
  );
}
