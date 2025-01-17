'use client';
import Navbar from '@/components/navbar/Navbar';
import ProfileCard from '@/components/profileCard/ProfileCard';
import React from 'react'

const Home = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-12">
                            <Navbar />
                        </div>
                        <div className="col-lg-4 col-md-3 col-12">
                            <ProfileCard />
                        </div>
                        <div className="col-lg-7 col-md-8 col-12">
                            <div className="descriptionMain"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home