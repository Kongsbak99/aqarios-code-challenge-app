"use client"

import React, { useState, useEffect } from 'react';
import Editor from "@monaco-editor/react";

import styles from './page.module.scss';

const HomePage: React.FC = () => {
  const [code, setCode] = useState<string>('');
  //const [fixedCode, setFixedCode] = useState<string>('');

  const fixedCode = `
from beanie import PydanticObjectId
import fastapi
from fastapi import BackgroundTasks, Depends, HTTPException, Request, Response

from app.models import (
    UseCaseDescription,
    UseCaseStatus,
    Status,
    UseCaseUpdate,
    StatusCode,
)
from app.models.registration.document import (
    UseCaseDocument,
    UseCaseDocumentDescription,
    UseCaseDocumentDescriptionUpdate,
    UseCaseDocumentFull,
)
from app.mongo import UseCase
from app.mongo.user import User
from app.security.auth import get_user_from_cookie, get_user_from_header, auth_service


router = fastapi.APIRouter(tags=["registration"])


@router.get("/api/useCases", response_model=list[UseCaseStatus])
async def get_all_use_cases() -> list[UseCaseStatus]:
    """Read all registered use cases."""

    use_cases: list[UseCase] = await UseCase.find(
        fetch_links=True,
    ).to_list()

    return [UseCaseStatus.from_orm(use_case) for use_case in use_cases] `

  return (
    <div className={styles.body}>
      <h1>Aqarios Code Challenge</h1>
      <p>Hello and welcome to the aqarios code challenge</p>
      <p>Look at the below code snippet and finish the FastAPI with all relevant CRUD operations in the input field</p>
      <div className={styles.editorWrapper}>
        <Editor
          height="500px"
          language="python"
          theme="vs-dark"
          value={fixedCode}
          //onChange={value => setCode(value || '')}
          options={{
            fontSize: 16,
            formatOnType: true,
            autoClosingBrackets: 'languageDefined',
            minimap: { scale: 10 }
          }}
        />
        <p>Your code here: </p>
        <Editor
          height="500px"
          language="python"
          theme="vs-dark"
          value={code}
          options={{
            readOnly: true,
            fontSize: 16,
            formatOnType: true,
            autoClosingBrackets: 'languageDefined',
            minimap: { scale: 10 }
          }}
        />
      </div>
      <div className={styles.inputWrapper}>
        <input type='text' defaultValue={'name'}></input>
        <input type='text' defaultValue={'email'}></input>
        <button>Save</button>
      </div>
    </div>
  );
};

export default HomePage;