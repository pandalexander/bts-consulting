const Contact = () => {
  return (
    <div>
      <footer className=" border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2  gap-4">
          <div>
            <h3 className="text-md font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:7194652465"
                  className="text-neutral-600 hover:text-sky-500"
                >
                  719-465-2465
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/aw8GerXmCriqjdKE7"
                  target="_blank"
                  className="text-neutral-600 hover:text-sky-500"
                >
                  2665 Paragon Dr A, Colorado Springs, CO 80918
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="text-neutral-600 ">
                Monday-Friday: 10:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
