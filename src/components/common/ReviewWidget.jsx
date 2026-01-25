import { useEffect } from "react";

const ReviewWidget = () => {
  useEffect(() => {
    // Load the review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <iframe 
        className="lc_reviews_widget" 
        src="https://reputationhub.site/reputation/widgets/review_widget/DNTDSqnKN0ChCy7dAGHr?widgetId=697688f523720e1ce7bbb8ca" 
        frameBorder="0" 
        scrolling="no" 
        style={{ minWidth: '100%', width: '100%', border: 'none' }}
        title="Customer Reviews"
      />
    </div>
  );
};

export default ReviewWidget;
