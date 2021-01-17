//Importar as dependências
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Pacientes from "./pages/pacientes";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/pacientes" exact component={Pacientes} />
    </Switch>
  );
}

export default Routes;
