import { HttpException, HttpStatus } from "@nestjs/common"
import { FailedPreconditionError } from "../../services/instructions/errors/failed-precondition.error";

export const errorToHttpException = (err: any) => {
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = err.message;

    if(err instanceof FailedPreconditionError) {
        statusCode = HttpStatus.PRECONDITION_FAILED;
    }

    return new HttpException(HttpException.createBody({
        message: errorMessage,
    }), statusCode);

}