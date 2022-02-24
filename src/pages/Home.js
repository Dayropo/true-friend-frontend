import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="m-0 min-h-screen font-poppins">
      <div className="bg-cover bg-center bg-header h-screen text-black">
        {/** navbar */}
        <nav className="flex items-center justify-between md:px-16 py-4 md:text-xl">
          <a href="/">LOGO</a>
          <div className="flex items-center space-x-3">
            <Link to="/tricks">Tricks</Link>
            <a href="#contact">Contact Us</a>
          </div>
        </nav>

        {/** header */}
        <div className="text-center mt-4">
          <h4 className="tracking-widest font-light">VET CLINIC</h4>
          <h1 className="text-6xl font-bold">True Friend</h1>
        </div>
      </div>

      {/** rescue */}
      <div className="bg-center bg-cover bg-fuchsia-100 grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24 py-8">
        <div className="col-span-1 flex flex-col justify-center">
          <h3 className="md:text-xl font-light tracking-widest">VET CLINIC</h3>
          <h2 className="md:text-4xl text-lg">
            Rescue a <span className="font-semibold">Pet</span>
          </h2>
          <p className="md:text-lg">
            Transform an animals life forever and explore the range of cats,
            kittens, puppies, dogs and more looking for a loving home near you
            today
          </p>
          <button className="bg-black text-white  py-2 tracking-widest rounded mt-2 w-1/2">
            FIND OUT MORE
          </button>
        </div>
        <div className="col-span-1">
          <img
            src={require("../assets/images/rescue-a-dog.jpg")}
            alt=""
            className="w-full"
          />
        </div>
      </div>

      {/** training */}
      <div className="md:px-24 px-8 py-8 bg-cover bg-center bg-train h-80vh grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="md:text-4xl text-lg">Basic Dog</h2>
          <h3 className="md:text-xl tracking-widest font-light">TRAINING</h3>
          <p className="md:text-lg">
            Training your dog should be fun! Everyone knows it's easier to learn
            when you are having a good time. Proper training and socialization
            are among your dog's basic needs.
          </p>
          <button className="bg-black py-2 tracking-widest text-white mt-2 rounded md:w-1/2">
            ALL SERVICES
          </button>
        </div>
      </div>

      {/** need a sweetheart */}
      <div className="min-h-screen md:px-24 px-8 py-8 grid grid-cols-2 bg-cover bg-center bg-sweetheart">
        <div className="col-start-2 col-span-1 flex flex-col justify-center">
          <h2 className="md:text-4xl text-lg">Need a Sweet Heart?</h2>
          <p className="md:text-lg">
            With more adorable pets than ever, we have an urgent need for pet
            adopters. Search for dogs, cats and other available pets for
            adoption near you.
          </p>
          <form action="" className="w-full md:w-4/5 mt-2">
            <div className="relative flex items-center">
              <input
                type="text"
                name="text"
                placeholder="Enter your name"
                autoComplete="off"
                aria-label="Emter your name"
                className="w-full p-4 border-none rounded-xl text-black placeholder:text-gray-400 "
              />
              <button
                className="absolute right-1 bg-black py-3 px-4 text-white rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
