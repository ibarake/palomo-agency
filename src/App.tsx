import LogoMain from './assets/fullLogoWhite.svg';

export default function App() {
  return (
    <>
      <div className="App flex items-center justify-center h-screen w-screen bg-[#DCCCB3]">
        <header className='flex flex-col items-center justify-center'>
          <img src={LogoMain} className="App-logo" alt="logo" width={256} />
          <h1 className="text-3xl font-bold text-gray-500">
            Palomo Agency
          </h1>
        </header>
      </div>
    </>
  )
}