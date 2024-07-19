import Swal from 'sweetalert2';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8b54af41-480c-4596-bb82-01febc93c59f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });

      event.target.reset();
    }
  };

  return (
    <div className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h2 className="text-4xl text-gray-800 text-center mb-10 font-extrabold tracking-wide">Contact Me</h2>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
          </div>

          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5} placeholder="Your Message" required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
