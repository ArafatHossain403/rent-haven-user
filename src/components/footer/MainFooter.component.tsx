"use client";

const MainFooter = () => {
  return (
    <footer className="bg-gray-50 border-t py-8 mt-12">
      {/* Top Section: Categories */}
      <div className="container mx-auto px-8 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Inspiration for future getaways
        </h2>
        <div className="flex space-x-8 border-b border-gray-300 pb-4 mb-6">
          <button className="text-black font-semibold">Popular</button>
          <button className="text-gray-500">Arts & culture</button>
          <button className="text-gray-500">Outdoors</button>
          <button className="text-gray-500">Mountains</button>
          <button className="text-gray-500">Beach</button>
          <button className="text-gray-500">Unique stays</button>
          <button className="text-gray-500">Categories</button>
          <button className="text-gray-500">Things to do</button>
          <button className="text-gray-500">Travel tips & inspiration</button>
          <button className="text-gray-500">Airbnb-friendly apartments</button>
        </div>

        {/* Inspiration Locations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 text-sm">
          <div>
            <span className="font-semibold">Canmore</span>
            <br />
            Condo rentals
          </div>
          <div>
            <span className="font-semibold">Benalmádena</span>
            <br />
            Beach house rentals
          </div>
          <div>
            <span className="font-semibold">Marbella</span>
            <br />
            Apartment rentals
          </div>
          <div>
            <span className="font-semibold">Mijas</span>
            <br />
            Apartment rentals
          </div>
          <div>
            <span className="font-semibold">Prescott</span>
            <br />
            Pet-friendly rentals
          </div>
          <div>
            <span className="font-semibold">Scottsdale</span>
            <br />
            Pet-friendly rentals
          </div>
          <div>
            <span className="font-semibold">Tucson</span>
            <br />
            Mansion rentals
          </div>
          <div>
            <span className="font-semibold">Jasper</span>
            <br />
            Cabin rentals
          </div>
          <div>
            <span className="font-semibold">Mountain View</span>
            <br />
            Pet-friendly rentals
          </div>
          <div>
            <span className="font-semibold">Devonport</span>
            <br />
            Cottage rentals
          </div>
          <div>
            <span className="font-semibold">Mallacoota</span>
            <br />
            Beach house rentals
          </div>
          <div>
            <span className="font-semibold">Ibiza</span>
            <br />
            Vacation rentals
          </div>
          <div>
            <span className="font-semibold">Anaheim</span>
            <br />
            Apartment rentals
          </div>
          <div>
            <span className="font-semibold">Monterey</span>
            <br />
            House rentals
          </div>
          <div>
            <span className="font-semibold">Paso Robles</span>
            <br />
            Cottage rentals
          </div>
          <div>
            <span className="font-semibold">Santa Barbara</span>
            <br />
            Apartment rentals
          </div>
          <div>
            <span className="font-semibold">Sonoma</span>
            <br />
            Rentals with pools
          </div>
          <button className="text-gray-500">Show more ▼</button>
        </div>
      </div>

      {/* Middle Section: Support, Hosting, Airbnb */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-y-6">
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  AirCover
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Anti-discrimination
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Disability support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Cancellation options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Report neighborhood concern
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hosting</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500">
                  Airbnb your home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  AirCover for Hosts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Hosting resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Community forum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Hosting responsibly
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Airbnb-friendly apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Join a free Hosting class
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Airbnb</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  New features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Gift cards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Airbnb.org emergency stays
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="hover:underline">
              © 2024 Airbnb, Inc.
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Your Privacy Choices
            </a>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:underline">
              English (US)
            </a>
            <a href="#" className="hover:underline">
              $ USD
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
