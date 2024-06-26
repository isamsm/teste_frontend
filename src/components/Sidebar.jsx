import logo from '../assets/sidebar/logo.webp'
import home from '../assets/sidebar/home.svg'
import kanban from '../assets/sidebar/kanban.svg'
import route from '../assets/sidebar/route.svg'
import schedule from '../assets/sidebar/schedule.svg'
import calendar from '../assets/sidebar/calendar.svg'
import admin from '../assets/sidebar/admin.svg'
import communication from '../assets/sidebar/communication.svg'
import education from '../assets/sidebar/education.svg'
import invoices from '../assets/sidebar/invoices.svg'
import exit from '../assets/sidebar/exit.svg'

export default function Sidebar() {
  return (
    <>
      <div style={{backgroundColor: '#4963FF'}} className='flex fixed h-full flex-col justify-evenly w-16 md:w-24 lg:w-24'>
        <div className='flex flex-col gap-1 items-center'>
          <img src={logo} className='h-12 md:h-16 lg:h-16 w-12 md:w-16 lg:w-16' alt='Imagem de logo'/>
          <hr className='border-white w-12 lg:w-20 m-2 opacity-20'/>
        </div>
        <img src={home} className='h-6' alt='Icone inicio'/>
        <img src={kanban} className='h-6' alt='Icone kanban'/>
        <img src={route} className='h-6' alt='Icone rotas'/>
        <img src={schedule} className='h-6' alt='Icone horários'/>
        <img src={calendar} className='h-6' alt='Icone calendário'/>
        <img src={admin} className='h-6' alt='Icone adminisitração'/>
        <img src={communication} className='h-6' alt='Icone comunicação'/>
        <img src={education} className='h-12' alt='Icone professores'/>
        <img src={invoices} className='h-6' alt='Icone escalação'/>
        <hr className='border-white w-12 lg:w-20 m-2 opacity-20 mt-24'/>
        <div className='flex gap-2 justify-center pb-12'>
          <p className='font-semibold text-white'> Sair </p>
          <img src={exit} alt='Icone sair'/>
        </div>
      </div>
    </>
  )
}
