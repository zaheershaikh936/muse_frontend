import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardElementProps {
  title?: any;
  description?: any;
  content?: any;
  footer?: any;
  style?: any;
}
const CardElement: React.FC<CardElementProps> = ({
  title,
  description,
  content,
  footer,
  style,
}) => {
  const cardDesign = `w-full shadow-sm hover:shadow-lg ${style}`;
  return (
    <Card className={cardDesign}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CardElement;
