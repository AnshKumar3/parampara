import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import { problems } from "@/mockProblems/problems";
import { BsCheckCircle } from "react-icons/bs";

type ProblemsTableProps = {
	
};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
	return(
		<tbody className='text-white'>

			
			{problems.map((doc,idx)=>{
				return(
					<tr className={`${idx % 2 == 1} ? 'bg-dark-layer-1':''}`}key={doc.id}>
                          <th className='px-2 py-4 w-0 font-medium whitespace-normal text-dark-green-s' >
							<BsCheckCircle fontSize={"18"} width="18" />

                                </th>
					</tr>
				)
			})

			}

		</tbody>
	)}
	export default ProblemsTable;
	