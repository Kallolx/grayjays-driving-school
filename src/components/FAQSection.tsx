import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does it take to get a driver's license?",
    answer: "The process typically takes 8-12 months. Our BDE program includes 20 hours of classroom instruction, 10 hours of in-car training, and 10 hours of home study. After completing the course, you can take your road test in as little as 8 months from getting your G1."
  },
  {
    question: "What's included in your Beginner Driver Education (BDE) course?",
    answer: "Our MTO-approved BDE course includes 20 hours of in-class lessons, 10 hours of one-on-one in-car training, 10 hours of flexible home study, and a certification upon completion. You'll learn everything from basic car control to advanced defensive driving techniques."
  },
  {
    question: "Do you provide a car for the road test?",
    answer: "Yes! We provide a well-maintained, fully insured vehicle for your road test. Our cars are regularly serviced and equipped with dual brake controls for safety. We also offer pre-test warm-up lessons to help you feel confident on test day."
  },
  {
    question: "What are your payment options?",
    answer: "We offer flexible payment plans with no interest. You can pay in full or choose our installment plan: 40% initial deposit and two monthly payments of 30% each. We accept all major credit cards, debit, e-transfer, and cash payments."
  },
  {
    question: "Can I reschedule my driving lessons?",
    answer: "Yes, you can reschedule your lessons with at least 24 hours notice at no additional charge. Last-minute cancellations or no-shows may incur a fee. We understand schedules change and try to be as flexible as possible."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Scarborough, North York, Markham, and Richmond Hill. Our instructors are familiar with all local road test routes and can pick you up from home, school, or work within these areas."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2c3149] mb-6">
            FAQs: Got Questions? <span className="text-yellow-500">We've got answers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to commonly asked questions about our driving school and courses.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-[#2c3149]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-yellow-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection; 