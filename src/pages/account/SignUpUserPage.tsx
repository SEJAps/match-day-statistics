import { FC } from 'react';
import signupCSS from './css/signin_user.module.css';
import { useSignup } from './hooks/useSignup';
import { MDSLogo } from '../../components/Logo';

const SignUpUserPage: FC = () => {
    const { formData, handleChange, handleSubmit, successMessage, error } = useSignup();
    return (
        <section className={signupCSS.container} style={{backgroundImage: 'url(./addteams.jpg)'}}>
            <article className={signupCSS.content}>
                <header className={signupCSS.header}>
                     <MDSLogo width={256} height={128} />
                     <h1 className={signupCSS.heading}>Registro de Entrenador</h1>
                </header>
                <aside className={signupCSS.showNotification}>
                    {successMessage && <p style={{ color: 'rgb(181, 252, 167)' }}>{successMessage}</p>}
                    {error && <p style={{ color: 'rgb(252, 167, 167)' }}>Error: {error}</p>}
                </aside>
                <form onSubmit={handleSubmit} className={signupCSS.formUserResgister}>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="club">Club:</label>
                        <input
                            type="text"
                            id="club"
                            name="club"
                            value={formData.club}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="pais">País:</label>
                        <select
                            id="pais"
                            name="pais"
                            style={{
                                padding: ".5rem",
                                borderRadius: "0.5rem"
                            }}
                            value={formData.pais}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona un país</option>
                            <option value="España">España</option>
                            <option value="Argentina">Argentina</option>
                            <option value="México">México</option>
                            {/* Añade más países según necesites */}
                        </select>
                    </div>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="codigoPostal">Código Postal:</label>
                        <input
                            type="text"
                            id="codigoPostal"
                            name="codigoPostal"
                            value={formData.codigoPostal}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={signupCSS.formControl}>
                        <label htmlFor="categoria">Categoría:</label>
                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <footer className={signupCSS.footer}>
                        <button type="submit" className={signupCSS.btn}>Registrarse</button>
                    </footer>
                </form>
            </article>
        </section>
    );
};

export default SignUpUserPage;