import Image from 'next/image'
import React from 'react'
import UserImage from "../../../public/images/saad_ahmad.png"
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaInstagram, FaNpm } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { MdOutlinePhoneInTalk } from "react-icons/md";





const ProfileCard = () => {
    return (
        <>
            <div className="profileCard">
                <div className="img-box">
                    <Image src={UserImage} alt='' width="500px" height="500px" />
                </div>
                <div className="content-box">
                    <p className="role">
                        Fronend Developer
                    </p>
                    <p className="name">
                        Saad Ahmad
                    </p>
                    <div className="social-box">
                        <Link href="">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="">
                            <FaGithub />
                        </Link>
                        <Link href="">
                            <FaInstagram />
                        </Link>
                        <Link href="">
                            <FaNpm />
                        </Link>
                        <Link href="">
                            <FaXTwitter />
                        </Link>
                    </div>
                </div>
                <div className="button-box">
                    <Link href="">
                        <RxDownload/>Resume
                    </Link>
                    <Link href="">
                        <MdOutlinePhoneInTalk/>Contact
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProfileCard