const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7692802304923!2d55.3126591744592!3d25.244694829776886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d4d5d697c1%3A0x6713985aabd9a3e2!2sOffice%20Court%20Building!5e0!3m2!1sen!2s!4v1721196010566!5m2!1sen!2s"
        className="border-none w-full h-[400px] outline-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;
