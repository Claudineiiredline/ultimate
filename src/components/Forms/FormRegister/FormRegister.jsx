import { FormRegisterContainer, ImgContainer } from "./styles"
import Logo from "../../../assets/logo.png";

export function FormRegister (){
    return (
        <FormRegisterContainer>

            <div>
                    <ImgContainer>
                    <img src={Logo}/>
                    </ImgContainer>
                <form>
                    
                   <label for="username">Login: *</label>
                   <input type="text"  required placeholder="Usuário"/>
                   <label for="Email">Email: *</label>
                   <input type="email" required placeholder="Email"/>
                   <label for="phone">Celular: *</label>
                   <input type="number" required placeholder="(xx) xxxx-xxxx"/>
                   <label for="password">Senha: *</label>
                   <input type="password" required placeholder="Senha"/>
                   <label for="password">Confirmar Senha: *</label>
                   <input type="password" required placeholder="Repita a Senha"/>
                   
                   <button>Cadastrar</button>
                </form>


            </div>

        </FormRegisterContainer>
    )
}
