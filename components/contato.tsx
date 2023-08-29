import Link from 'next/link'

export default function Contato() {
    return (
      <section className="relative">
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          <div className="pt-32 pb-12 md:pt-10 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
              <h1 className="h1">Welcome. We exist to make entrepreneurship easier.</h1>
            </div>
  
            {/* Form */}
            <div className="max-w-sm mx-auto">
            
            
              <form>
                <div className="flex flex-wrap mb-4 -mx-3">
                  <div className="w-full px-3">
                    <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                    <input id="full-name" type="text" className="w-full text-gray-300 form-input" placeholder="First and last name" required />
                  </div>
                </div>
              
                <div className="flex flex-wrap mb-4 -mx-3">
                  <div className="w-full px-3">
                    <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                    <input id="email" type="email" className="w-full text-gray-300 form-input" placeholder="you@yourcompany.com" required />
                  </div>
                </div>

                <div className="flex flex-wrap mb-4 -mx-3">
                  <div className="w-full px-3">
                    <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                    <textarea id="message"  className="w-full text-gray-300 form-input" placeholder="Write your thoughts here..."></textarea>
                  </div>
                </div>

                
                <div className="flex flex-wrap mt-6 -mx-3">
                  <div className="w-full px-3">
                    <button className="w-full text-white bg-purple-600 btn hover:bg-purple-700">Enviar</button>
                  </div>
                </div>
              </form>
              
            </div>
  
          </div>
        </div>
      </section>
    )
  }