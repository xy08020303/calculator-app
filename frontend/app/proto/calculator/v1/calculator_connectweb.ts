// @generated by protoc-gen-connect-web v0.8.6 with parameter "target=ts"
// @generated from file calculator/v1/calculator.proto (package calculator.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CalculationRequest, CalculationResponse } from "./calculator_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service calculator.v1.CalculatorService
 */
export const CalculatorService = {
  typeName: "calculator.v1.CalculatorService",
  methods: {
    /**
     * @generated from rpc calculator.v1.CalculatorService.Calculate
     */
    calculate: {
      name: "Calculate",
      I: CalculationRequest,
      O: CalculationResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

