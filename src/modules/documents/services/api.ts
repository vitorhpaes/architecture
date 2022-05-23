import { HTTP_METHODS } from '@config/types/config/HTTPMethods';
import HTTPMethods from "@config/constants/HTTPMethods";

interface GenebraRequest {
    url: string
    body: any
    method: HTTP_METHODS,
    params?: { [key: string]: any } | null
    hasToken?: boolean
    headers?: Headers 
}

const genebraRequest = async ({
    url,
    body,
    params = null,
    method = HTTPMethods.GET,
    hasToken = true,
    headers = new Headers()
}: GenebraRequest) => {
    
    

}