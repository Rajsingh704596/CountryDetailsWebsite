import "../css/Contact.css"

export const Contact = () => {

  const handleFormSubmit = (formData) => {
    console.log(formData.entries());             //o/p- FormData Iterator
    //^ formData.entries() returns an iterator of key-value pairs from the form data.
    //^ Each key corresponds to a form input's name, and the value corresponds to the input's value e.g.- if form has input field like <input name="username" value="rock"/>, it will return ['username','rock']
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);                  //o/p- Object
   
    //^ Object.fromEntries() is a method that converts an iterable of key-value pairs into a plain javascript object. 
    //^ e.g- Object.fromEntries(formData.entries())  o/p- {username:"rock",}

  };

  return (

    <section className="section-contact">

      <h2 className="container-title">Contact Us</h2>
        <div className="child-container">
        <form action={handleFormSubmit} className="contact-wrapper">
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send" className="btn">
            Send
          </button>
        </form>
        </div>
    </section>
  );
};