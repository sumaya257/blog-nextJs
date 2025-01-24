import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';

async function profile() {
  const { isAuthenticated} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const {getUser} = getKindeServerSession();
 const user = await getUser();
  return (
    <div>
      {!isUserAuthenticated ? <><h2>please login</h2></> : (
        <div class="flex items-center justify-center h-screen bg-black">
        <div class="text-center p-8 bg-white/10 border border-white/30 rounded-lg shadow-lg backdrop-blur-md">
          <h2 class="text-2xl font-bold text-white">Welcome to the profile of {user.given_name}</h2>
        </div>
      </div>
      
      )}
    </div>
  )
}

export default profile