"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";

function ReadySections() {
  const [win, setWin] = useState(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWin(window);
    }
  }, []);
  return (
    <Card>
      <CardBody>
        {win !== null &&
        win.location.pathname === "/drive-with-us/fleet-management" ? (
          <h1>Ready to manage your Fleet?</h1>
        ) : (
          <h1>Ready to Drive with Us?</h1>
        )}
      </CardBody>
    </Card>
  );
}

export default ReadySections;
