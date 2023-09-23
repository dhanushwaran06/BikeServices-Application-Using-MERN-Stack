const Testimonial = ( testimonial ) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-gray-600">{testimonial.text}</p>
        <p className="text-gray-800 mt-2 font-bold">{testimonial.author}</p>
      </div>
    );
  };
  
  export default Testimonial;