import React from 'react'

const Psettings = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-[25px] font-semibold">Sozlamalar</h1>
        {/* <form>
          <label htmlFor="">SMS xabarnoma uchun telefon raqam qoshing .</label>
          <input type="number" placeholder="Telefon raqam kiriting" />
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Saqlash
            </button>
          </div>
        </form> */}
        <div>
            <h2 className="text-md font-medium mb-4">Ulangan raqam</h2>
            <p className="text-gray-600">+998 90 123 45 67</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer">
                Raqamni uzish
            </button>

        </div>
      </div>
    </div>
  );
}

export default Psettings