"use client";

// This is a single-file React app, we will not use external imports
// like next/image or next/link and will instead use standard HTML elements
// and inline SVGs for compatibility.

export default function ContactForm() {
  

  // State to handle form submission message
  

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

 

  return (
    <div className="flex flex-col justify-center p-7 text-white ">
      
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Contact Me</h1>
        <p className="text-lg text-gray-300 mb-8">Lets get in touch!</p>
        
        <form  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Email field ---------------------*/}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-orange-500">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="mt-1 block w-full  border-b border-white focus:outline-none focus:border-orange-500 transition-colors" 
              required 
            />
          </div>
          
          {/* Phone field ---------------------*/}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-orange-500">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              // value={} 
              className="mt-1 block w-full  border-b border-white focus:outline-none focus:border-orange-500 transition-colors" 
            />
          </div>
          
          {/* Name field -------------------*/}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-orange-500">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              // value={formData.name} 
              className="mt-1 block w-full  border-b border-white focus:outline-none focus:border-orange-500 transition-colors" 
              required 
            />
          </div>
          
          {/* Address field---------------------- */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-orange-500">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              // value={formData.address} 
              className="mt-1 block w-full  border-b border-white focus:outline-none focus:border-orange-500 transition-colors" 
            />
          </div>
          
          {/* Content field ------------------------ */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="content" className="block text-sm font-medium text-orange-500">Content</label>
            <textarea 
              id="content" 
              name="content" 
              rows={4} 
              // value={formData.content} 
              className="mt-1 block w-full  border-b border-white focus:outline-none focus:border-orange-500 transition-colors" 
              required
            ></textarea>
          </div>

          {/* Checkbox----------------------- */}
          <div className="col-span-1 md:col-span-2 flex items-center mt-4">
            <input 
              id="newsletter" 
              name="newsletter" 
              type="checkbox" 
              // onChange={handleChange}
              className="cursor-pointer form-checkbox h-4 w-4 text-orange-600  border-gray-600 rounded focus:ring-orange-500" 
            />
            <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-300">
              I would like to receive the newsletter.
            </label>
          </div>
          
          {/* Submit button ---------------------------*/}
          <div className="col-span-1 md:col-span-2 mt-6">
            <button 
              type="submit" 
              className="cursor-pointer w-full py-3 px-6 rounded-xl bg-orange-500 text-white font-semibold shadow-md transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    
  );
}
