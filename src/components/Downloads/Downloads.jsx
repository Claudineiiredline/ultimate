import { SiMega } from "react-icons/si";
import { AiOutlineDownload } from "react-icons/ai";
import { SiGoogledrive } from "react-icons/si";
import { DownloadsContainer, BtnDownload } from "./styles";

export function Downloads() {
    return (
    <DownloadsContainer>
            <div>
                <ul>
                    <li>
                         <h1>
                            Opções de Downloads
                           </h1>
                           <BtnDownload><a href="https://drive.google.com/file/d/1E9hU40jRyUDzpiFjUQn4JfpgbCs6f0vo/view?usp=drive_link" target="_blank">Google Drive<SiGoogledrive style={{color: "green"}} size={20}/></a></BtnDownload>
                           <BtnDownload><a href="https://drive.google.com/file/d/1E9hU40jRyUDzpiFjUQn4JfpgbCs6f0vo/view?usp=drive_link" target="_blank">Mega<SiMega style={{color: "red"}} size={20}/></a></BtnDownload>
                           <BtnDownload><a href="https://drive.google.com/file/d/1E9hU40jRyUDzpiFjUQn4JfpgbCs6f0vo/view?usp=drive_link" target="_blank">Link Direto<AiOutlineDownload style={{color: "black"}} size={20}/></a></BtnDownload>
                    </li>
                </ul>
            </div>
    </DownloadsContainer>
    )
}