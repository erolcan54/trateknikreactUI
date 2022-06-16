import React,{ useState} from "react";
import { Redirect } from "react-router-dom";

const Home = () => {

    const[KullaniciAdi,setKullaniciAdi]=useState('');
    const[Sifre,setSifre]=useState('');

    const submit=async (e)=>{
        
        e.preventDefault();

        var result= await fetch('http://localhost:46197/api/Kullanici/Login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            body:JSON.stringify({
                KullaniciAdi,
                Sifre
            })
        });

        if(result.status==200){
            alert('başarılı');
            return <Redirect to="/LoginAccess" />
        }
        else {
            alert('Kullanıcı bulunamadı.');
        }

    };

    return (
        <div className="card mt-5">
            <div className="card-body p-4 justify-content-center align-items-center">
                <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center pb-0 fw-bold">Sisteme Giriş Paneli</h4>
                </div>
                <form className="m-5" onSubmit={submit}> 
                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="Kullanıcı Adı Yazınız"
                        onChange={e=>setKullaniciAdi(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <div className="input-group input-group-merge">
                            <input type="password" className="form-control" placeholder="Şifre Yazınız"
                            onChange={e=>setSifre(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 mb-0 text-center">
                        <button className="btn btn-primary" type="submit" id="btnlogin"> Giriş </button>
                    </div>
                </form>
            </div> 
        </div>
    );
};

export default Home;