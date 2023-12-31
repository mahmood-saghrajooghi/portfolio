export default function Layout ({ children }) {
  return (
    <>
      <main>
        {children}
      </main>
      <footer>
        <div className='flex justify-between items-center text-sm mx-auto h-full footer-content'>
          <div>Find flow.</div>
          <div>2023</div>
        </div>
      </footer>
    </>
  )
}
