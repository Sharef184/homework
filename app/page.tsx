import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
import { GoFilter } from 'react-icons/go'
import { MdNotes } from 'react-icons/md'

// Components
import Card from './components/card/page'

export default function Home() {
  return (
    <div>      
      <div className="flex justify-between">
        <div>
          <h3 className="">Page title</h3>
        </div>
        <div className="flex justify-between">
          <Link href="#">
            <button className="btn-primary mx-2 rounded-md">Export to PDF <span><FiDownload className="button-icon"/></span></button>
          </Link>
          <Link href="#">
            <button className="btn-primary mx-2 rounded-md">Notes<span><MdNotes className="button-icon"/></span></button>
          </Link>
          <Link href="#">
            <button className="btn-primary mx-2 rounded-md">Filter <span><GoFilter className="button-icon"/></span></button>
          </Link>
        </div>
      </div>
      <Card />
    </div>
  )
}