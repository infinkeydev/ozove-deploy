"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";

function SectionTwo() {
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
          <h1>Oz Ove Fleet Management Powering Microentrepreneurs</h1>
        ) : (
          <h1>The freedom to work and earn in your own time</h1>
        )}
      </CardBody>
    </Card>
  );
}

export default SectionTwo;
