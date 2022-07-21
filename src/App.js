import logoSearch from './images/Search.png'
import logoNotification from './images/Notification.png'
import logoHome from './images/Home.png'
import logoDelete from './images/Delete.png'
import logoEdit from './images/Edit.png'
import logoSend from './images/Send.png'
import banner from './images/Banner.jpg'
import pp from './images/PP.jpg'
import { useState } from 'react'

function App() {
  const [hamburger, setHamburger] = useState(true);

  return (
    <div className='container mx-auto p-3'>
      {/* INFORMATION MOBILE START */}
      <div className={hamburger ? 'hidden' : 'block'}>
        <div className='left-0 top-0 absolute w-full grid grid-cols-[350px_auto] h-full'>
          <div className='bg-white w-full'>

            <img src={banner} alt="" className='object-none h-24' />
            <div className='w-24 h-24 rounded-full overflow-hidden mx-auto -mt-11 border border-slate-400 mb-5'>
              <img src={pp} alt="" />
            </div>

            <h2 className='text-xl text-center font-bold'>Mitramas Infosys Global</h2>
            <h5 className='text-slate-400 text-center'>Layanan IT</h5>

            <div className='flex justify-center items-center gap-3 my-6'>
              <img src={logoEdit} alt="" />
              <h5 className='text-green-700 font-semibold'>Sunting profil</h5>
            </div>

            <div className='px-5 pb-10'>
              <h5 className='text-slate-400 font-semibold'>Status Perusahaan</h5>
              <h4 className='text-green-700 font-bold'>Aktif</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>Singkatan</h5>
              <h4>MIG</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>Alamat Perusahaan</h5>
              <h4>Jl. Tebet Raya No. 42, Jakarta Selatan</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>Penanggung Jawab (PIC)</h5>
              <h4>John Doe</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>Tanggal PKP</h5>
              <h4>03 Maret 2021</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>E-mail</h5>
              <h4 className='text-green-700 underline'>mig@mitrasolusi.group</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>No. Telp</h5>
              <h4 className='text-green-700'>021-5678-1234</h4>

              <h5 className='text-slate-400 font-semibold mt-3'>Situs Web</h5>
              <h4 className='text-green-700 underline mb-3'>mitramas.com</h4>

            </div>
          </div>

          <div className='bg-slate-700 opacity-70' onClick={() => setHamburger(true)}></div>
        </div>
      </div>
      {/* INFORMATION MOBILE END */}


      {/* HEADER START */}
      <div className='flex justify-end items-center gap-2 mb-3'>
        <button className={hamburger ? 'block absolute left-4 xl:hidden' : 'hidden'} onClick={() => setHamburger(false)}>
          <span className='w-[30px] h-[2px] bg-slate-700 my-2 block'></span>
          <span className='w-[30px] h-[2px] bg-slate-700 my-2 block'></span>
          <span className='w-[30px] h-[2px] bg-slate-700 my-2 block'></span>
        </button>

        <img src={logoSearch} alt="" width={30} className="cursor-pointer" />
        <img src={logoNotification} alt="" width={30} className="cursor-pointer" />
        <div className='bg-slate-500 w-8 h-8 rounded-full cursor-pointer'></div>
        <h5 className="cursor-pointer text-lg">John Doe</h5>
      </div>
      <div className='flex gap-3 mb-8'>
        <h4 className='text-lg text-slate-400'>Perusahaan</h4>
        <h4 className='text-lg text-slate-400'>{'>'}</h4>
        <h4 className='text-lg font-bold text-slate-600'>Mitramas Infosys Global</h4>
      </div>
      {/* HEADER END */}

      <div className='xl:grid xl:grid-cols-[300px_auto] xl:gap-5'>
        <div className='bg-red-500 hidden xl:block'>
asdf
        </div>
        <div>
          {/* LOCATION START */}
          <div className='bg-white rounded-xl px-5 py-3 mb-5 shadow-lg'>
            <h2 className='font-bold text-2xl mb-3'>Lokasi</h2>
            <div className='md:grid md:grid-cols-2 md:gap-3 md:mx-auto lg:grid-cols-3'>
              <div className='bg-[#42934A] px-6 py-7 mb-3 md:mb-0 rounded-xl flex justify-between items-center'>
                <img src={logoHome} alt="" width={30} height={30} />
                <div className='text-right text-white'>
                  <h2 className='text-3xl font-bold'>20</h2>
                  <h4>Induk</h4>
                </div>
              </div>
              <div className='bg-[#50B058] px-6 py-7 mb-3 md:mb-0 rounded-xl flex justify-between items-center'>
                <img src={logoHome} alt="" width={30} height={30} />
                <div className='text-right text-white'>
                  <h2 className='text-3xl font-bold'>3</h2>
                  <h4>Sublokasi level 1</h4>
                </div>
              </div>
              <div className='bg-[#6CBC73] px-6 py-7 mb-3 md:mb-0 rounded-xl flex justify-between items-center'>
                <img src={logoHome} alt="" width={30} height={30} />
                <div className='text-right text-white'>
                  <h2 className='text-3xl font-bold'>1</h2>
                  <h4>Sublokasi level 2</h4>
                </div>
              </div>
            </div>
          </div>
          {/* LOCATION END */}

          <div className='lg:grid lg:grid-cols-[448px_auto] gap-5'>
            <div>
              {/* BANK START */}
              <div className='bg-white rounded-xl px-5 py-4 lg:max-w-lg mb-5 shadow-lg'>
                <div className='flex justify-between items-center mb-5'>
                  <h2 className='font-bold text-2xl mb-3'>Akun Bank</h2>
                  <button className='bg-[#42934A] text-white px-8 py-2 rounded-lg font-semibold hover:opacity-80 transition duration-200'>Tambah Akun Bank</button>
                </div>

                <div>
                  <div className='grid grid-cols-[128px_auto] gap-3 mb-4'>
                    <div className='bg-yellow-500 h-24 w-32 rounded-lg'></div>
                    <div className='h-24'>
                      <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-bold'>Bank KB Bukopin</h3>
                        <div className='flex gap-3'>
                          <img src={logoEdit} alt="" className='cursor-pointer' />
                          <img src={logoDelete} alt="" className='cursor-pointer' />
                        </div>
                      </div>
                      <div className=''>
                        <h4 className='text-slate-400'>**** 0876 - Yusron Taufiq</h4>
                        <h4 className='text-slate-400'>IDR</h4>
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-[128px_auto] gap-3'>
                    <div className='bg-yellow-500 h-24 w-32 rounded-lg'></div>
                    <div className='h-24'>
                      <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-bold'>Citibank, NA</h3>
                        <div className='flex gap-3'>
                          <img src={logoEdit} alt="" className='cursor-pointer' />
                          <img src={logoDelete} alt="" className='cursor-pointer' />
                        </div>
                      </div>
                      <div className=''>
                        <h4 className='text-slate-400'>**** 5525 - Si Tampan</h4>
                        <h4 className='text-slate-400'>USD</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* BANK END */}

              {/* RELASI START */}
              <div className='bg-white rounded-xl px-5 py-4 lg:max-w-lg mb-5 shadow-lg'>
                <div className="flex justify-between items-center mb-8">
                  <h2 className='font-bold text-2xl'>Relasi</h2>
                  <button className='text-green-700 hover:opacity-80'>Lihat Semua</button>
                </div>

                <div>
                  <div className='flex gap-8 items-center'>
                    <img src={logoSend} alt="" width={40} height={40} />
                    <div className='mb-5'>
                      <h1 className='text-3xl font-bold'>20</h1>
                      <h3 className='text-xl'>Memiliki</h3>
                    </div>
                  </div>
                  <div className='flex gap-8 items-center'>
                    <img src={logoSend} alt="" width={40} height={40} />
                    <div className='mb-5'>
                      <h1 className='text-3xl font-bold'>108</h1>
                      <h3 className='text-xl'>Menggunakan</h3>
                    </div>
                  </div>
                  <div className='flex gap-8 items-center'>
                    <img src={logoSend} alt="" width={40} height={40} />
                    <div className='mb-5'>
                      <h1 className='text-3xl font-bold'>67</h1>
                      <h3 className='text-xl'>Meminjam</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* RELASI END */}
            </div>

            {/* AKTIVITAS START */}
            <div className='bg-white rounded-xl px-5 py-4 mb-5 shadow-lg'>
              <h2 className='font-bold text-2xl'>Aktivitas</h2>

              <div>
                <h5 className='text-lg'>Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</h5>
                <p className='opacity-50 mb-3'>Hari ini, 06:00</p>

                <h5 className='text-lg'>Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</h5>
                <p className='opacity-50 mb-3'>Kemarin, 17:32</p>

                <h5 className='text-lg'>Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi</h5>
                <p className='opacity-50 mb-3'>Kemarin, 17:32</p>
              </div>
            </div>
            {/* AKTIVITAS END */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
