import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import error404 from "../assets/errorpages/error404.png";
import error401 from "../assets/errorpages/error401.png";
import error503 from "../assets/errorpages/503.png";
import error418 from "../assets/errorpages/418.png";
import oops from "../assets/errorpages/oops.png";
import ErrorImage from "../components/ErrorImage";
const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorImage
          src={error404}
          numeroError={"404"}
          textoDescriptivo={"Page not Found"}
        />
      );
    }

    if (error.status === 401) {
      return (
        <ErrorImage
          src={error401}
          numeroError={"401"}
          textoDescriptivo={"You aren't authorized to see this"}
        />
      );
    }

    if (error.status === 503) {
      return (
        <ErrorImage
          src={error503}
          numeroError={"503"}
          textoDescriptivo={"Looks like our API is down"}
        />
      );
    }

    if (error.status === 418) {
      return (
        <ErrorImage
          src={error418}
          numeroError={"418"}
          textoDescriptivo={" I'm a teapot"}
        />
      );
    }
  }

  return (
    <ErrorImage
      src={oops}
      numeroError={"oops"}
      textoDescriptivo={" Something went wrong"}
    />
  );
};

export default ErrorPage;
