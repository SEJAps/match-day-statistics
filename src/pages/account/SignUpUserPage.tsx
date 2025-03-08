// src/components/RegistroUsuario.tsx
import { FC } from 'react';

import { useSignup } from './hooks/useSignup';

const SignUpUserPAge: FC = () => {
    const { formData, handleChange, handleSubmit, successMessage, error } = useSignup();
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h2 style={{
                textAlign: "center"
            }}>Registro de Entrenador</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                gap: "1.55rem",
                maxWidth: "375px",
            }}>
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="email">Email:</label>
                    <input
                        style={{
                            padding: ".5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="password">Contraseña:</label>
                    <input
                        style={{
                            padding: ".5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="nombre">Nombre:</label>
                    <input
                        style={{
                            padding: ".5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="club">Club:</label>
                    <input
                        style={{
                            padding: ".5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="text"
                        id="club"
                        name="club"
                        value={formData.club}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="pais">País:</label>
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
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="codigoPostal">Código Postal:</label>
                    <input
                        style={{
                            padding: ".5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="text"
                        id="codigoPostal"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{
                    display: "flex",
                    gap: "1rem"
                }}>
                    <label style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "end"
                    }} htmlFor="categoria">Categoría:</label>
                    <input
                        style={{
                            padding: ".5rem",
                            borderRadius: "0.5rem",
                        }}
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    />
                </div>
                <footer style={{
                    display: "flex",
                    justifyContent: "end"
                }}>
                    <button style={{
                        padding: ".66rem",
                        backgroundColor: "skyblue",
                        color: "white",
                        border: "none",
                        borderRadius: "0.5rem",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem"
                    }} type="submit">Registrarse</button>
                </footer>
            </form>
        </section>
    );
};

export default SignUpUserPAge;