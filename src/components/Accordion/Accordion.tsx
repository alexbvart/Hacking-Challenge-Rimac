import { useState } from 'react';
type AccordioProps = {
    title: string;
    children: React.ReactNode;
}


const Accordion = ({ title, children }: AccordioProps) => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <header>
            <h3>{title}</h3>
            <button onClick={()=>{ setOpen(!open) }}>
                { open ? 'Close' : 'Open'}
            </button>
        </header>
        {open &&  <span>{children}</span> }
        
    </div>
  )
}

export default Accordion