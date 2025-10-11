"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ItemDetails from "../../../components/ItemDetails";

const JobDetails = ({ params }) => {
  const { id } = params;
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/job/${id}`);
        setJobData(res.data.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!jobData) return <p className="text-center mt-10 text-red-500">No job found.</p>;

  return <ItemDetails data={jobData} />;
};

export default JobDetails;
