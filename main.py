from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import test_route
import os
from dotenv import load_dotenv

load_dotenv(".env/data.env")
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(test_route.router)