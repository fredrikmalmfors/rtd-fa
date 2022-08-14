import React, { useRef } from 'react';
import Header from '../partials/Header';
import emailjs from '@emailjs/browser';

function Apply() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const t = e.target

    const params = {
      form_name: t.form_name.value,
      form_email: t.form_email.value,
      form_age: t.form_age.value,
      form_weight: t.form_weight.value,
      form_height: t.form_height.value,
      form_club_history: t.form_club_history.value,
      form_strengths: t.form_strengths.value,
      form_position: t.form_position.value,
      form_extra: t.form_extra.value,
      form_about_you: t.form_about_you.value,
      form_merits: t.form_merits.value,
      form_videos: t.form_videos.value
    }

    // emailjs.send('service_chslxqk', 'template_8zktdy8', params, 'Dyl4-o9ErYgg4RFNB')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Join us!</h1>
              </div>

              {/* 
              
                Spelare skickar in ansökan med presentation av deras fotbollscv
                Mall för ansökan
                * Ålder
                * Vikt/längd 
                * Position
                * Nuvarande / tidigare klubbar
                * Meriter inom fotboll 
                * Tre främsta styrkor
                Presentera dig själv som människa och dina ambitioner inom fotboll
                Video med höjdpunkter (länk / ladda upp)

                {{form_name}}
                {{form_email}}
                {{form_age}}
                {{form_weight}}
                {{form_height}}
                {{form_club_history}}
                {{form_strengths}}
              
              */}

              {/* Form */}
              <div className="max-w-4xl mx-auto">
                <form ref={form} onSubmit={sendEmail}>

                  {/* Name */}
                  <div className='grid grid-cols-4 gap-4'>
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                        <input id="form_name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                        <input id="form_email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                      </div>
                    </div>

                    {/* Age */}
                    <div className="col-span-2 md:col-span-1 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Age <span className="text-red-600">*</span></label>
                        <input id="form_age" type="text" className="form-input w-full text-gray-800" placeholder="Enter your age" required />
                      </div>
                    </div>

                    {/* Weight */}
                    <div className="col-span-2 md:col-span-1 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Weight <span className="text-red-600">*</span></label>
                        <input id="form_weight" type="text" className="form-input w-full text-gray-800" placeholder="e.g. 75kg" required />
                      </div>
                    </div>

                    {/* Height */}
                    <div className="col-span-2 md:col-span-1 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Height <span className="text-red-600">*</span></label>
                        <input id="form_height" type="text" className="form-input w-full text-gray-800" placeholder="e.g. 180cm" required />
                      </div>
                    </div>

                    {/* Position */}
                    <div className="col-span-2 md:col-span-1 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Position <span className="text-red-600">*</span></label>
                        <input id="form_position" type="text" className="form-input w-full text-gray-800" placeholder="e.g. Right Forward" required />
                      </div>
                    </div>

                    {/* Club history */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1">Club History <span className="text-red-600">*</span></label>
                        <textarea id="form_club_history" className="form-input w-full text-gray-800 h-32" placeholder="Where have you played?" required />
                      </div>
                    </div>

                    {/* Merits */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1">Merits <span className="text-red-600">*</span></label>
                        <textarea id="form_merits" className="form-input w-full text-gray-800 h-32" placeholder="What are you most proud of?" required />
                      </div>
                    </div>

                    {/* Strengths */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1">Strengths <span className="text-red-600">*</span></label>
                        <textarea id="form_strengths" className="form-input w-full text-gray-800 h-32" placeholder="What are your biggest strenghts as a player?" required />
                      </div>
                    </div>

                    {/* About you */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1">About You <span className="text-red-600">*</span></label>
                        <textarea id="form_about_you" className="form-input w-full text-gray-800 h-32" placeholder="What are your ambitions for the future?" required />
                      </div>
                    </div>

                    {/* Highlight Video(s) */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1">Highlight Videos</label>
                        <textarea id="form_videos" className="form-input w-full text-gray-800 h-32" placeholder="Add links to your highlight videos here!" />
                      </div>
                    </div>

                    {/* Extra */}
                    <div className="col-span-4 md:col-span-2 flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1">Extra</label>
                        <textarea id="form_extra" className="form-input w-full text-gray-800 h-32" placeholder="Feel free to add anything you like here!" />
                      </div>
                    </div>


                  </div>

                  <div className="max-w-md mx-auto flex flex-wrap mt-6">
                    <div className="w-full px-3">
                      <button type='submit' className="btn text-white bg-golden hover:bg-goldenlight w-full">Send</button>
                    </div>
                  </div>

                  {/* <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                  </div> */}
                </form>

              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Apply;