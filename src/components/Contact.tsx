import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";


const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await emailjs.send(
        "service_6dkp0in",
        "template_yvqbh0b",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "RwsW0K_jmJETpwk5U"
      );
  
      if (result.status === 200) {
        toast.success("Message sent successfully! 🚀");
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            🤝 Let's Connect
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have a question, a project in mind, or just want to say
            hi — feel free to drop a message or connect through my social
            platforms.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-teal-500"></span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:mariapaulafernandezmarchena038@gmail.com"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <Mail className="mr-4" size={24} />
                    paulafernandezmarchena031@gmail.com
                  </a>
                  <a
                    href="https://github.com/pauli038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <Github className="mr-4" size={24} />
                    GitHub Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mar%C3%ADa-paula-fern%C3%A1ndez-aa70032a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <Linkedin className="mr-4" size={24} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
