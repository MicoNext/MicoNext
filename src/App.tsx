import AppLayout from './components/Layout/AppLayout'
import Hero from './components/Hero/Hero'
import ValueProposition from './components/Sections/ValueProposition'
import Skills from './components/Sections/Skills'
import Contact from './components/Sections/Contact'

function App() {
  return (
    <AppLayout>
      <Hero />
      <ValueProposition />
      <Skills />
      <hr className='border border-[1px] border-[#6d28d9] w-[100vw]' />
      <Contact />
    </AppLayout>
  )
}

export default App