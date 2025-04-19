import aboutPic from '../../assets/1740494381377.jpeg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={aboutPic}
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
            Hello!👋🏻 I’m a young woman passionate about technology and deeply committed to fostering inclusion. From a young age, I’ve been driven by a desire to help others and a fascination with STEM fields. 
            </p>
            <p className="text-lg text-gray-600 mb-6">
            This passion led me to pursue a degree in Systems Engineering, where I’ve built a strong foundation in programming, mastering various languages, architectures, databases, and project management. I’m also eager to continually expand my knowledge and thrive on learning new things. 🚀💜
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}