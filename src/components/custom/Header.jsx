import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
// import { useNavigate, useNavigation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  // const navigation = useNavigation();
   const [openDialog, setOpenDialog] = useState(false);

  useEffect(()=>{
    console.log(user);
  },[])

    const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    })
  }
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src="/logo.svg" alt="" />
        <div>
            {user ?
              <div className='flex items-centre gap-3'> 
                  <a href = '/create-trip'>
                  <Button variant="outline" className = "rounded-full"> Create Trips</Button>
                 </a>

                 <a href = '/my-trips'>
                  <Button variant="outline" className = "rounded-full"> My Trips</Button>
                 </a>

                <Popover>
                  <PopoverTrigger><img src = {user.picture} className='h-[25px] w-[25px] rounded-full'/></PopoverTrigger>
                  <PopoverContent>
                    <h2 className = 'cursor-pointer' onClick={()=>{
                        googleLogout();
                        localStorage.clear();
                      // navigation('\');
                      window.location.reload();
                    
                    }}>
                      Logout
                    </h2>
                  </PopoverContent>
                </Popover>
              </div>
              :
              <Button onClick = {() => setOpenDialog(true)}>Sign Up</Button>

              
            }

        </div>
        <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className='font-bold text-lg mt-7'>Sign in With Google</h2>
              <p>Sign in to the App with Google Authentication Security</p>
              <Button
                onClick={login}
                className="w-full mt-5 gap-4 items-center">
                <FcGoogle className='h-1 w-7' />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header