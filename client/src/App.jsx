import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

//importacion para dasboard
import DasboardPage from "./pages/dasboard";

// importaciones de inicio login home y register

// import HomePage from "./pages/HomePage";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

// IMPORTACIONES DE GRUPOS  
// import TasksPage from "./pages/TasksPage";
// import TaskFormPage from "./pages/TaskFormPage";
import GrupoPage from "./pages/GrupoPage";
import GrupoFormPage from "./pages/GruposFormPage";

// IMPORTACIONES DE RUTAS 
import RutasPage from "./pages/RutasPage";
import RutaFormPage from "./pages/RutaFormPage";

// IMPORTACIONES DE LINEAS 
import LineaPage from "./pages/LineasPage";
import LineaFormPage from "./pages/LineasFormPage";

// IMPORTACIONES DE CHOFERES
import ChoferPage from "./pages/ChoferPage";
import ChoferFormPage from "./pages/ChoferFormPage";

// IMPORTACIONES DE VEHICULOS 
import VehiculoPage from "./pages/VehiculoPage";
import VehiculoFormPage from "./pages/VehiculoFormPage";

import ControlPage from "./pages/ControlPage";

import PdfPage from "./pages/PDFPage";

// importacion para perfil de usuario
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./PortectedRoute";
// IMPORTACIONES DE PROVIDERS
import { RutaProvider } from "./context/RutaContext";
import { LineaProvider } from "./context/LineasContext";
import { GrupoProvider } from "./context/GrupoContext";
import { ChoferProvider } from "./context/ChoferContext";
import { VehiculoProvider } from "./context/VehiculoContext";
import { GpsProvider } from "./context/GpsContext";
// import { ControlProvider } from "./context/ControlContext";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (

    // <div className=" flex">
    //   <Sidebar sidebarToggle= {sidebarToggle}/>
    //   <DasboardPage
    //     sidebarToggle = {sidebarToggle}  
    //     setSidebarToggle={setSidebarToggle}
    //   />

    // </div>
    <AuthProvider>
      <RutaProvider>
        <LineaProvider>
          <GrupoProvider>
            <ChoferProvider>
              <VehiculoProvider>
                <GpsProvider>
                  <BrowserRouter>
                    <Sidebar />
                    <Navbar />
                    <main className="container mx-auto px-10 py-5 flex-1">
                      <Routes>

                        {/* <Route path="/" element={<HomePage />} /> */}
                        
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/registrar" element={<RegisterPage />} />
                        <Route element={<ProtectedRoute />}>

                          <Route path="/dasboard" element={<DasboardPage />} />

                          <Route path="/rutas" element={<RutasPage />} />
                          <Route path="/add-ruta" element={<RutaFormPage />} />
                          <Route path="/ruta/:rutaid" element={<RutaFormPage />} />
                          <Route path="/profile" element={<ProfilePage />} />

                          <Route path="/lineas" element={<LineaPage />} />
                          <Route path="/add-linea" element={<LineaFormPage />} />
                          <Route path="/linea/:lineaid" element={<LineaFormPage />} />

                          <Route path="/grupos" element={<GrupoPage />} />
                          <Route path="/add-grupo" element={<GrupoFormPage />} />
                          <Route path="/grupo/:grupoid" element={<GrupoFormPage />} />

                          <Route path="/chofers" element={<ChoferPage />} />
                          <Route path="/add-chofer" element={<ChoferFormPage />} />
                          <Route path="/chofer/:choferid" element={<ChoferFormPage />} />

                          <Route path="/vehiculos" element={<VehiculoPage />} />
                          <Route path="/add-vehiculo" element={<VehiculoFormPage />} />
                          <Route path="/vehiculo/:vehiculoid" element={<VehiculoFormPage />} />

                          <Route path="/controles" element={<ControlPage />} />
                          <Route path="/pdf" element={<PdfPage />} />

                        </Route>
                      </Routes>
                    </main>
                  </BrowserRouter>
                </GpsProvider>
              </VehiculoProvider>
            </ChoferProvider>
          </GrupoProvider>
        </LineaProvider>
      </RutaProvider>
    </AuthProvider>
  );
}

export default App;
