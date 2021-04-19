import * as FComponent from '../components';
import {
      Route 
  } from "react-router-dom";
import { Console } from 'console';

  type RouteRC ={
      path: string,
      component: React.ReactNode
  }
export const routesURL: RouteRC[] = [
    {
      path: "/cra",
      component: FComponent.Workflow.Cra
    },
    {
        path: "/frais",
        component: FComponent.Workflow.Frais
    },
    {
        path: "/Factures",
        component: FComponent.Workflow.Factures
    },
    {
        path: "/Histories",
        component: FComponent.Workflow.Histories
    },
    {
        path: "/Aides",
        component: FComponent.Workflow.Aide
    }
];

export const RenderComponent = ({path, component}: any) => {
    const RenderFC = component
    return (
      <Route
        path={path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <RenderFC {...props}/>
        )}
      />
    );
}