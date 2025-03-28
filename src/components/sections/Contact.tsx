import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/curriculumVtae/config';
import { Header } from '../atoms/Header';
import GlobeDemo from '../canvas/World';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      ...form,
      to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_ACCESS_TOKEN
      )
      .then(
        () => {
          toast.success('Thank you. I will get back to you as soon as possible.', {
            position: 'top-right',
          });
          setForm(INITIAL_STATE);
        },
        error => {
          console.error('Failed to send email:', error);
          toast.error('Something went wrong. Please try again.', {
            position: 'top-right',
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-transparent flex-[0.75] rounded-2xl p-8 pb-4 mb-4 border-2 border-gray-700"
      >
        <Header useMotion={false} {...config.contact} />

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === 'email' ? 'email' : 'text'}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-transparent border-2 border-gray-700 placeholder:text-secondary rounded-lg px-6 py-4 font-medium text-white outline-none"
                  rows={input === 'message' ? 7 : undefined}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className=" border-2 border-secondary bg-black px-4 opacity-50 text-white font-medium py-4 rounded-lg hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {isMediumScreen && (
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <GlobeDemo />
        </motion.div>
      )}
      <ToastContainer
        className="z-50"
        theme="purple"
        autoClose={2000}
        hideProgressBar={true}
        pauseOnHover={true}
        position="top-right"
        style={{
          marginTop: '60px',
          right: '10px',
          zIndex: 1050,
        }}
      />
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
