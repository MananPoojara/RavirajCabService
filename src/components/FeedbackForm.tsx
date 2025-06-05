import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FeedbackForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    feedback: "",
  });

  useEffect(() => {
    const lastSubmission = localStorage.getItem("feedback_last_submission");
    if (lastSubmission) {
      const timeDiff = Date.now() - parseInt(lastSubmission);
      const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
      
      if (timeDiff < thirtyMinutes) {
        setCanSubmit(false);
        setIsSubmitted(true);
      }
    }

    // Auto-show feedback form after 10 seconds if not submitted recently
    if (canSubmit) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [canSubmit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.feedback || formData.rating === 0) {
      return;
    }

    // Store submission data in localStorage
    const submissionData = {
      ...formData,
      timestamp: Date.now(),
    };
    
    localStorage.setItem("feedback_data", JSON.stringify(submissionData));
    localStorage.setItem("feedback_last_submission", Date.now().toString());
    
    setIsSubmitted(true);
    setCanSubmit(false);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  if (!canSubmit && !isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cab-accent/10 rounded-full">
                    <MessageCircle className="w-5 h-5 text-cab-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Share Your Feedback
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Your feedback has been submitted successfully.
                    </p>
                    <p className="text-sm text-gray-500">
                      You can submit new feedback after 30 minutes.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cab-accent focus:border-transparent transition-all"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Rate Your Experience
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingClick(star)}
                            className="p-1 transition-transform hover:scale-110"
                          >
                            <Star
                              size={32}
                              className={`${
                                star <= formData.rating
                                  ? "text-cab-accent fill-cab-accent"
                                  : "text-gray-300"
                              } transition-colors`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Feedback Textarea */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Feedback
                      </label>
                      <Textarea
                        value={formData.feedback}
                        onChange={(e) =>
                          setFormData({ ...formData, feedback: e.target.value })
                        }
                        placeholder="Tell us about your experience with RishirajCab..."
                        className="min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-cab-accent hover:bg-yellow-400 text-cab-dark font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      Submit Feedback
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FeedbackForm;
