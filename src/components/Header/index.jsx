import React from 'react'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Index() {
  return (
    <div>
      
      <div className={`header_top flex justify-end pr-3`}>
        <EmailOutlinedIcon className={`color_icons_white`}/> support@oursecondhouse.com
      </div>
      
      
        <div className={'flex justify-between items-center mx-5 py-3'}>
            <div className='flex justify-center items-center gap-2'>
              <div className='flex justify-center items-center gap-2'>
                <CottageRoundedIcon className={`color_icons`}/>
                <a>Home</a>
              </div>
              <div>
              <a>About</a>
              </div>
            </div>
            <div>
              <button type="button" className={`custom_button`}>Login</button>
              <button type="button" className={`custom_button`}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Index
