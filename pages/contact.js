import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Contact() {
  let globalData = getGlobalData();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState('Send a message');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');

        setFullname('');
        setEmail('');
        setMessage('');
        setSubject('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');

      setFullname('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="w-full">
        <section className="mt-12">
          <Title>Let&apos;s talk</Title>

          <div className="mx-auto">
            <p className="dark:text-gray-200 text-center">
              Fill the form and send in your queries. I will respond as soon as
              I can.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-6 px-8 py-8 backdrop-blur-lg bg-gray-500 dark:bg-black dark:bg-opacity-30 bg-opacity-10"
          >
            <label htmlFor="fullname">
              Full name<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="bg-transparent border-b border-slate-700 py-2 focus:outline-none"
            />
            {errors?.fullname && (
              <p className="text-red-500">Fullname cannot be empty.</p>
            )}

            <label htmlFor="email" className="mt-10">
              E-mail<span className="text-red-500"> *</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-transparent border-b border-slate-700 py-2 focus:outline-none"
            />
            {errors?.email && (
              <p className="text-red-500">Email cannot be empty.</p>
            )}

            <label htmlFor="subject" className="mt-10">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="bg-transparent border-b border-slate-700 py-2 focus:outline-none"
            />
            {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )}
            <label htmlFor="message" className="mt-10">
              Message<span className="text-red-500"> *</span>
            </label>
            <textarea
              name="message"
              value={message}
              cols="4"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-transparent border-b border-slate-700 py-2 focus:outline-none"
            ></textarea>
            {errors?.message && (
              <p className="text-red-500">Message body cannot be empty.</p>
            )}
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="mt-8 px-4 py-2 text-base uppercase text-white font-semibold bg-red-600 hover:bg-opacity-70 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                {buttonText}
              </button>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold my-2">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
