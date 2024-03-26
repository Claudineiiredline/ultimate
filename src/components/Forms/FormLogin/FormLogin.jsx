import { FormLoginContainer, ImgContainer } from "./styles"
import Logo from "../../../assets/logo.png";

export function FormLogin (){
    return (
        <FormLoginContainer>

            <div>
                    <ImgContainer>
                    <img src={Logo}/>
                    </ImgContainer>
                <form>
                    
                   <label for="username">Login: *</label>
                   <input type="text" required placeholder="Usuário"/>
                   <label for="password">Senha: *</label>
                   <input type="password" required placeholder="Senha"/>
                   
                   <button>Conectar</button>
                </form>


            </div>

        </FormLoginContainer>
    )
}
